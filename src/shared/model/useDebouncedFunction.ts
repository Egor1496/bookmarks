import { useRef, useEffect } from "react";

const useDebouncedFunction = (func:any, delay:any, cleanUp = false) => {
	const timeoutRef:any = useRef();

	function clearTimer() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = undefined;
		}
	}

	useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

	return (...args:any) => {
		clearTimer();
		timeoutRef.current = setTimeout(() => func(...args), delay);
	};
};

export { useDebouncedFunction };
