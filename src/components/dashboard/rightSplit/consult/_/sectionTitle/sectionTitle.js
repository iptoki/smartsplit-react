const SectionTitle = (props) => { 
  return (
    <div style={style.title}> 
      {props.value}
    </div>
  )
}

export default SectionTitle

const style = {
  title : {
    borderBottom : "1px solid black", 
    marginBottom : "10px",
    fontWeight : "1000"
  }
}