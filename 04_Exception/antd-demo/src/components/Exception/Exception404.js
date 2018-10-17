import React from 'react';
import Exception from 'ant-design-pro/lib/Exception';
const Exception404 = () => (
  <div>
  <Exception
    type="404"
    desc='抱歉，你訪問的頁面不存在'
    backText='返回首頁'
    />
  </div>
);


export default Exception404;