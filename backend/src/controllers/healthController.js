const getHealth = (req, res, next) => {
    try {
        return res.status(200).json({status: "OK"});
    } catch (error) {
        return next(error);
    }
};

export default getHealth;
