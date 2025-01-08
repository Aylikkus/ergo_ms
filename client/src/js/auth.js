import axios from 'axios';

import Cookies from 'js-cookie';

const thirtyMinutesInDays = 30 / (24 * 60);

export const authorization = async (login, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/cms/adp/authorization/', {
            username: login,
            password: password,
        });

        if (response.status === 200)
        {
            Cookies.set('token', response.data.access, { expires: thirtyMinutesInDays });
            Cookies.set('refresh', response.data.refresh, { expires: thirtyMinutesInDays });

            return { success: true };
        } 
        else 
        {
            return { success: false, errors: response.data };
        }
    } 
    catch (error) 
    {
        return { success: false, errors: error.response?.data || 'Ошибка сервера.' };
    }
};

export const validateRegistration = async (name, login, email, password) => {
    try 
    { 
        const response = await axios.post('http://127.0.0.1:8000/api/cms/adp/validate_registration/', {
            first_name: name,
            username: login,
            email: email,
            password: password,
            is_superuser: false,
        });

        if (response.status === 200)
        {
            return { success: true };
        }
        else 
        {
            return { success: false, errors: response.data };
        }
    }
    catch (error) 
    {
        return { success: false, errors: error.response.data };
    }
}

export const sendConfirmationCode = async (email) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/cms/adp/send_code/', {
            email: email,
        });

        if (response.status === 200)
        {
            return { success: true };
        } 
        else 
        {
            return { success: false, errors: response.data };
        }
    } 
    catch (error) 
    {
        return { success: false, errors: error.response.data };
    }
}

export const verifyConfirmationCode = async (email, code) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/cms/adp/verify_code/', {
            email: email,
            code: code,
        });

        if (response.status === 200)
        {
            return { success: true };
        } 
        else 
        {
            return { success: false, errors: response.data };
        }
    } 
    catch (error) 
    {
        return { success: false, errors: error.response.data };
    }
}

export const registration = async (name, login, email, password) => {
    try 
    { 
        const response = await axios.post('http://127.0.0.1:8000/api/cms/adp/registration/', {
            first_name: name,
            username: login,
            email: email,
            password: password,
            is_superuser: false,
        });

        if (response.status === 200)
        {
            return { success: true };
        }
        else 
        {
            return { success: false, errors: response.data };
        }
    }
    catch (error) 
    {
        return { success: false, errors: error.response.data };
    }
}

export const checkToken = async () => {
    const token = Cookies.get('token');

    if (!token) 
    {
        return false;
    }

    try 
    {
        const response = await axios.get('http://127.0.0.1:8000/api/cms/adp/protected/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200)
        {
            return true;
        }
        else 
        {
            return false;
        }
    } 
    catch (error) 
    {
        return false;
    }
};

export const logout = () => 
{
    Cookies.remove('token');
    Cookies.remove('refresh');
};
