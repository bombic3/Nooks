// 유효성을 검증하는 기능 추가 validator함수
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
      // validator(value) = 유효성 검사 시작
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
