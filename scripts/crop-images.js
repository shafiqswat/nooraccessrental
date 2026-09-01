const sharp = require("sharp");
const path = require("path");

const assetsDir =
  "C:/Users/wajiz.pk/.cursor/projects/d-Next-JS-Projects-Nooraccessrental/assets";
const outDir = path.join(__dirname, "..", "public", "images");

const crops = [
  {
    src: "c__Users_wajiz.pk_AppData_Roaming_Cursor_User_workspaceStorage_1ef263aef9a33884bd38f8aa27cf8214_images_image-24d2e07d-b4e1-444a-9b79-7750a4c9317b.png",
    out: "boom-lift.jpg",
    top: 0.025,
    left: 0.05,
    width: 0.48,
    height: 0.46,
  },
  {
    src: "c__Users_wajiz.pk_AppData_Roaming_Cursor_User_workspaceStorage_1ef263aef9a33884bd38f8aa27cf8214_images_image-ca33a52d-077e-40b6-98ee-0bf1850f87c9.png",
    out: "scissor-lift-electric.jpg",
    top: 0.105,
    left: 0.06,
    width: 0.48,
    height: 0.255,
  },
];

async function toProductCanvas(buffer) {
  const cropped = await sharp(buffer).metadata();
  const targetW = 800;
  const targetH = 600;
  const scale = Math.min(
    (targetW - 80) / cropped.width,
    (targetH - 80) / cropped.height
  );
  const resizedW = Math.round(cropped.width * scale);
  const resizedH = Math.round(cropped.height * scale);

  return sharp(buffer)
    .resize(resizedW, resizedH, { fit: "inside" })
    .extend({
      top: Math.floor((targetH - resizedH) / 2),
      bottom: Math.ceil((targetH - resizedH) / 2),
      left: Math.floor((targetW - resizedW) / 2),
      right: Math.ceil((targetW - resizedW) / 2),
      background: "#ffffff",
    })
    .jpeg({ quality: 95 })
    .toBuffer();
}

async function run() {
  for (const crop of crops) {
    const input = path.join(assetsDir, crop.src);
    const meta = await sharp(input).metadata();
    const w = meta.width;
    const h = meta.height;

    const left = Math.max(0, Math.round(crop.left * w));
    const top = Math.max(0, Math.round(crop.top * h));
    const width = Math.min(w - left, Math.round(crop.width * w));
    const height = Math.min(h - top, Math.round(crop.height * h));

    const buffer = await sharp(input)
      .extract({ left, top, width, height })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 95 })
      .toBuffer();

    const canvas = await toProductCanvas(buffer);
    await sharp(canvas).toFile(path.join(outDir, crop.out));
    console.log(`Created ${crop.out}`);
  }
}

run().catch(console.error);
