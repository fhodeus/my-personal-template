import yup  from 'yup'

var yupValidation  = yup.ValidationError

const errorHandler = (error, request, response, next) => {

  console.log(error)

  if (error instanceof yupValidation) {
    let errors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    }) 
    return response.status(400).json({message:'Validation fails' , errors})
  }

  return (response.status(500).json({ message: 'Internal server error' }))

}

export default errorHandler;