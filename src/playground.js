import { Op } from "sequelize";
import "./database";
import Customer from "./app/models/Customer.js";
import Contact from "./app/models/Contact.js";
import Database from "./database";

class Playground {
    
    static async play() {
        //const customers = await Customer.findByPk(1);
        // const customers = await Customer.findOne({
        //     attributes: { exclude: ["status"]},
        // });
        const customers = await Customer.findAll({
            include: {
                model: Contact,
                where: {
                    status: 'ACTIVE',
                },
            },
            where: {
                status: {
                    [Op.in]: ['ACTIVE', 'ARCHIVED'],
                },
                // name: {
                //     [Op.like]: '%zinho%',
                // },
            },
        });
        console.log(JSON.stringify(customers, null, 2));

    }
}

Playground.play();