/** @odoo-module**/

import { useService } from "@web/core/utils/hooks";
import { Component } from "@odoo/owl";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { _t } from "@web/core/l10n/translation";
import { ErrorPopup } from "@point_of_sale/app/errors/popups/error_popup";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";

class CustomDiscount extends Component {
    static template = "point_of_sale.DiscountButton";

    setup() {
        this.popup = useService("popup");
        this.pos = useService("pos");
    }
    async onCustomDiscount() {
        const selectedLines = this.pos.get_order().get_orderlines();
        if (!selectedLines) {
            this.popup.add(ErrorPopup, {
                title: _t("OrderLine is not selected"),
                body: _t("Please select an order first!"),
            });
            return;
        }

        const { confirmed, payload: inputNote } = await this.popup.add(NumberPopup, {
            title: _t("Add ALL Over Discount(%) For Customer"),
            body: _t("Enter the discount percentage (e.g. 10 for 10%):"),


        });

        if (confirmed) {
        if (inputNote >= 100 || inputNote <=0 || !Number(inputNote)){
        this.popup.add(ErrorPopup, {
                title: _t("You can not give discount value 0 or 100"),
                body: _t("Please Enter valid value!"),
            });
            return;
        }
        for (let selectedLine of  selectedLines){
            selectedLine.set_discount(inputNote);
            }
        }
    }
};

ProductScreen.addControlButton({
    component: CustomDiscount,
    position: ["after", "clearButton"],
});