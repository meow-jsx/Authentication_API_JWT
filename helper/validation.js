const Joi = require('joi');

const RegisterValidation = (input) => {
    let { error } = Joi.object(
        {
            name:
                Joi.string()
                    .min(3)
                    .max(16)
                    .required()
                    .messages({
                        'string.empty': 'ای بابا'
                    }),
            email:
                Joi.string()
                    .min(6)
                    .email()
                    .required(),
            password:
                Joi.string()
                    .min(6)
                    .max(256)
                    .required()
        }
    ).with('email', 'password')
        .validate(input);
    return error ? error.details[0].message : error
}

const LoginValidation = (input) => {

    let { error } = Joi.object({
        email:
            Joi.string()
                .email()
                .min(3)
                .max(16)
                .required()
                .messages({
                    'string.empty': 'خالی نذار!'
                }),
        password:
            Joi.string()
                .min(6)
                .max(256)
                .required()
    }).validate(input);

    return error ? error.details[0].message : error;
}

module.exports = {
    RegisterValidation,
    LoginValidation
}