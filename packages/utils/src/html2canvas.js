import html2canvas from 'html2canvas';

/**
 * @description 页面元素转图片
 * @param {HTMLElement} ele dom节点
 * @param {object} [options={}] 配置对象
 * @returns {promise<string>} 成功 resolve(url) 失败 reject()
 */
const domToImage = (ele, options = {}) => {
  const configure = {
    backgroundColor: '#fff',
    dpi: 192, // 将分辨率提高到特定的dpi,默认值为96
    scale: 2, // 用于渲染的比例尺。默认为浏览器设备像素比率。默认值是1，手机端设置成2
    useCORS: true
  };

  return new Promise((resolve, reject) => {
    html2canvas(ele, Object.assign(configure, options)).then((canvas) => {
      const imgUrl = canvas.toDataURL('image/png');

      if (imgUrl.indexOf('image/png') !== -1) {
        resolve(imgUrl);
      }

      reject('error');
    });
  });
};

export default domToImage;
