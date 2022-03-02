import React from "react";

interface IContainerProps {
  children : any
}

const Container = (props: IContainerProps) => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-200">{props.children}</div>
)

export default Container