import '../scss/form.scss'

const Form = () => {
  return (
   <>
    <form >
        <label> Email address:</label>
        <input type="text" placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
    </form>
   </>
  )
}

export default Form