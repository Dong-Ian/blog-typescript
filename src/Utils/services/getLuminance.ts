export const getLuminance = (color: string) => {
  // RGB 값으로 변환
  let r: number, g: number, b: number;

  if (color.startsWith("#")) {
    // #RRGGBB 형태의 색상 코드 처리
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else {
    // rgb() 형태의 색상 코드 처리
    const rgb = color.match(/\d+/g);
    if (rgb) {
      r = parseInt(rgb[0]);
      g = parseInt(rgb[1]);
      b = parseInt(rgb[2]);
    } else {
      return 255; // 기본값: 밝은 색으로 간주
    }
  }

  // 색상의 밝기 계산 (https://www.w3.org/TR/WCAG20/#relativeluminancedef)
  const luminance = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;

  return luminance;
};
