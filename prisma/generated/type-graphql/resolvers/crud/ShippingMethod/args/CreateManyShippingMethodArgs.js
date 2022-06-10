"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateManyInput_1 = require("../../../inputs/ShippingMethodCreateManyInput");
let CreateManyShippingMethodArgs = class CreateManyShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodCreateManyInput_1.ShippingMethodCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyShippingMethodArgs.prototype, "data", void 0);
CreateManyShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyShippingMethodArgs);
exports.CreateManyShippingMethodArgs = CreateManyShippingMethodArgs;
