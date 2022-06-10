"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpdateManyWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateManyPriceInputEnvelope_1 = require("../inputs/ShippingMethodCreateManyPriceInputEnvelope");
const ShippingMethodCreateOrConnectWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateOrConnectWithoutPriceInput");
const ShippingMethodCreateWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateWithoutPriceInput");
const ShippingMethodScalarWhereInput_1 = require("../inputs/ShippingMethodScalarWhereInput");
const ShippingMethodUpdateManyWithWhereWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateManyWithWhereWithoutPriceInput");
const ShippingMethodUpdateWithWhereUniqueWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateWithWhereUniqueWithoutPriceInput");
const ShippingMethodUpsertWithWhereUniqueWithoutPriceInput_1 = require("../inputs/ShippingMethodUpsertWithWhereUniqueWithoutPriceInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodUpdateManyWithoutPriceInput = class ShippingMethodUpdateManyWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodCreateWithoutPriceInput_1.ShippingMethodCreateWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodCreateOrConnectWithoutPriceInput_1.ShippingMethodCreateOrConnectWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodUpsertWithWhereUniqueWithoutPriceInput_1.ShippingMethodUpsertWithWhereUniqueWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateManyPriceInputEnvelope_1.ShippingMethodCreateManyPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateManyPriceInputEnvelope_1.ShippingMethodCreateManyPriceInputEnvelope)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodUpdateWithWhereUniqueWithoutPriceInput_1.ShippingMethodUpdateWithWhereUniqueWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodUpdateManyWithWhereWithoutPriceInput_1.ShippingMethodUpdateManyWithWhereWithoutPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodScalarWhereInput_1.ShippingMethodScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodUpdateManyWithoutPriceInput.prototype, "deleteMany", void 0);
ShippingMethodUpdateManyWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodUpdateManyWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodUpdateManyWithoutPriceInput);
exports.ShippingMethodUpdateManyWithoutPriceInput = ShippingMethodUpdateManyWithoutPriceInput;
