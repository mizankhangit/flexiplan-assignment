export const formatSize = (mb: any) => {
  const mbInt = parseInt(mb, 10); // Ensure the input is parsed as an integer
  if (mbInt < 1024) {
    return mbInt + " MB";
  } else {
    const gb = mbInt / 1024;
    if (Number.isInteger(gb)) {
      return gb + " GB";
    } else {
      return gb.toFixed(1) + " GB";
    }
  }
};
