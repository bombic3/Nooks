// useEffect는 componentWillUnMount 때 발생하게 되는데 return값이 발생될 일.
// 그래서 useEffect 안에 function 을 넣으면(여기에선 if function)
// componentDidMount, componentDidUpdate 때 호출 될 거임.
// []dependency가 존재하지 않은 한

// 만약 [dependency]가 존재한다면 function(여기에선 if function)은
// componentDidMount일 때 단 한 번만 호출 됨

// componentWillUnMount 일 때는 return 함
// 만약 function을 return한다면 useEffect를 return받은 그 함수는
// componentWillUnMount 때 호출 됨.

export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnMount 될 때 eventListener를 막아줘야 함
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  // useEffect 가 mount 됐을 때 첫번째 if문을 call 함(update했을 때도 마찬가지로 call)
  // 따라서 [] 처음 한번만 실행되게 해줌

  return element;
};