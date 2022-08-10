import { InputNumber } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react'
import useEth from '../../contexts/EthContext/useEth';
import { useEffect } from 'react';
function Tree() {
  const { state } = useEth()
  const [num, setNum] = useState(0)

  const getCount = async () => {
    const count = await state?.contract?.methods?.getCount().call();
    console.log('count:', count)
    setNum(count)
  }
  const increase = async () => {
    await state?.contract?.methods?.increase().send({from: state?.accounts[0]})
    getCount()
  }
  
  const decrease = async () => {
    await state?.contract?.methods?.decrease().send({from: state?.accounts[0]})
    getCount()
  }


  const addonBefore = <MinusOutlined onClick={decrease} />
  const addonAfter = <PlusOutlined onClick={increase} />
  useEffect(() => {
    getCount()
  }, [state])
  return (
    <code>
      <InputNumber addonBefore={addonBefore} addonAfter={addonAfter} value={num} />
    </code>
  );
}

export default Tree;
