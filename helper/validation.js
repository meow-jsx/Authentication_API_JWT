const Joi = require('joi');

const RegisterValidation = (input) => {
    return Joi.object(
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
}

const LoginValidation = (input) => {

    const LoginSchema = Joi.object({
        email:
            Joi.string()
                .email()
                .min(3)
                .max(16)
                .require()
                .messages({
                    'string.empty': 'خالی نذار!'
                }),
        password:
            Joi.string()
                .min(6)
                .max(256)
                .required()
    }).with('email', 'password');

    return LoginSchema.validate(input);
}

module.exports = {
    RegisterValidation,
    LoginValidation
}