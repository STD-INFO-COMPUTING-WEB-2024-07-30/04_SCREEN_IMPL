// 이미지를 Base64로 변환하는 함수
async function convertImageToBase64(fs, mime, path) {
  await fs.promises.readFile(path);
  const mimeType = mime.lookup(path);
  console.log("mimeType", mimeType);
  try {
    const stat = await fs.promises.stat(path); // 파일/디렉토리 구분
    if (stat.isFile()) {
      const fileBuffer = fs.readFileSync(path);
      const base64Image = fileBuffer.toString("base64");
      //console.log(`data:${mimeType};base64,${base64Image}`)

      return `data:${mimeType};base64,${base64Image}`;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error reading file at ${path}:`, error);
    return null;
  }
}

//섬네일 이미지 파일 -> base64 Encoding Code로 변환 전달
async function toBase64ThumbnailImage(fs, mime, path, data) {
  const updatedData = [];

  for (const item of data) {
    // 이미지 파일 경로 생성
    const dirPath = path.join(item.dir, "thumbnail");
    const imagePath = path.join(dirPath, item.fileName);
    const base64Image = await convertImageToBase64(fs, mime, imagePath);
    // Base64 데이터를 JSON 객체에 추가
    updatedData.push({
      ...item,
      base64Image: base64Image,
    });
  }
  //console.log("toBase64ThumbnailImage",updatedData)
  return updatedData;
}

//이미지 파일 -> base64 Encoding Code로 변환 전달
async function toBase64Image(fs, mime, path, data) {
  const updatedData = [];

  for (const item of data) {
    // 이미지 파일 경로 생성
    const imagePath = path.join(item.dir, item.fileName);
    const base64Image = await convertImageToBase64(fs, mime, imagePath);
    // Base64 데이터를 JSON 객체에 추가
    updatedData.push({
      ...item,
      base64Image: base64Image,
    });
  }
  return updatedData;
}

module.exports = { toBase64ThumbnailImage, toBase64Image };
