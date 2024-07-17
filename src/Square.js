import './index.css'

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
      <section
          className="square"
          style={{
              backgroundColor: colorValue,
              color: isDarkText ? "#000" : "#FFF", fontSize: "30px"
          }}
      >
          <p>{colorValue ? colorValue : "Empty Value"}</p>
          <p>{hexValue ? hexValue : null}</p>
      </section>
  )
}

Square.defaultProps = {
  colorValue: "Empty Color Value"
}

export default Square