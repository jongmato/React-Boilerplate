import { useState } from "react";
import tw, { styled } from "twin.macro";

function App() {
	const [count, setCount] = useState(0);

	return <Box className="text-red-500">hi vite </Box>;
}

export default App;

const Box = styled.div(() => [tw`flex w-[150px] h-[150px] bg-blue-400 rounded-lg`]);
