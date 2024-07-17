import colorNames from 'colornames'

const Input = ({
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
    return (
      <>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
        <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
    >
        Toggle Text Color
    </button>
    </>
    )
}

export default Input