export const CheckOutContainer = ({handleSubmit, handleChange, errors, TextField, Button, alerta}) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center form">
      <h1 className="text-light bg-success hForm text-center rounded p-2 mb-4">Complete sus datos</h1>
      <form action="" className="bg-light rounded p-4 d-flex flex-column align-items-center my-3 mb-5" onSubmit={handleSubmit}>
      <TextField label="Nombre" variant="outlined" className="rounded mb-2"  name="nombre" onChange={handleChange} helperText={errors.nombre} error={errors.nombre ? true : false}/>
      <TextField label="Email" variant="outlined" className=" rounded mb-2" name="email" onChange={handleChange} helperText={errors.email} error={errors.email ? true : false}/>
      <TextField label="Telefono" variant="outlined" className=" rounded mb-4" name="telefono" onChange={handleChange} helperText={errors.telefono} error={errors.telefono ? true : false}/>
      <Button variant="contained" className="bg-dark text-light fw-bold text-lowercase" onClick={alerta} type="submit" sx={{fontSize : 29}}><span className="text-uppercase">E</span>nviar</Button>
      </form>
    </div>
  )
}

