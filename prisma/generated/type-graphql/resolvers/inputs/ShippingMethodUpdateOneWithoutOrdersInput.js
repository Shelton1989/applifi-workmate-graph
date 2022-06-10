"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpdateOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateOrConnectWithoutOrdersInput");
const ShippingMethodCreateWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateWithoutOrdersInput");
const ShippingMethodUpdateWithoutOrdersInput_1 = require("../inputs/ShippingMethodUpdateWithoutOrdersInput");
const ShippingMethodUpsertWithoutOrdersInput_1 = require("../inputs/ShippingMethodUpsertWithoutOrdersInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodUpdateOneWithoutOrdersInput = class ShippingMethodUpdateOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateOrConnectWithoutOrdersInput_1.ShippingMethodCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateOrConnectWithoutOrdersInput_1.ShippingMethodCreateOrConnectWithoutOrdersInput)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpsertWithoutOrdersInput_1.ShippingMethodUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpsertWithoutOrdersInput_1.ShippingMethodUpsertWithoutOrdersInput)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateWithoutOrdersInput_1.ShippingMethodUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateWithoutOrdersInput_1.ShippingMethodUpdateWithoutOrdersInput)
], ShippingMethodUpdateOneWithoutOrdersInput.prototype, "update", void 0);
ShippingMethodUpdateOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodUpdateOneWithoutOrdersInput", {
        isAbstract: true
    })
], ShippingMethodUpdateOneWithoutOrdersInput);
exports.ShippingMethodUpdateOneWithoutOrdersInput = ShippingMethodUpdateOneWithoutOrdersInput;
