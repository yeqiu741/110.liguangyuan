import axios from 'axios'



export default store => next => action => {

    if (!action.SERVER_API) {
        return next(action);
    }
    const {
        type,
        param,
        url
    }=action;
    next({
        type: `${type}_REQ`
    });

    axios({
        method: 'POST',
        url,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: param
    }).then(res => {
        next({
            type: `${type}_SUC`,
            data: res.data.data
        });
    })
        .catch(err => {
            console.log(err);
            next({
                type: `${type}_FAI`,
                err
            });
        });
}