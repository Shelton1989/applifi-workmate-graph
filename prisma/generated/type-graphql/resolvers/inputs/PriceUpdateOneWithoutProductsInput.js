"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutProductsInput_1 = require("../inputs/PriceCreateOrConnectWithoutProductsInput");
const PriceCreateWithoutProductsInput_1 = require("../inputs/PriceCreateWithoutProductsInput");
const PriceUpdateWithoutProductsInput_1 = require("../inputs/PriceUpdateWithoutProductsInput");
const PriceUpsertWithoutProductsInput_1 = require("../inputs/PriceUpsertWithoutProductsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneWithoutProductsInput = class PriceUpdateOneWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput)
], PriceUpdateOneWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutProductsInput_1.PriceCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutProductsInput_1.PriceCreateOrConnectWithoutProductsInput)
], PriceUpdateOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpsertWithoutProductsInput_1.PriceUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpsertWithoutProductsInput_1.PriceUpsertWithoutProductsInput)
], PriceUpdateOneWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceUpdateOneWithoutProductsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceUpdateOneWithoutProductsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutProductsInput_1.PriceUpdateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutProductsInput_1.PriceUpdateWithoutProductsInput)
], PriceUpdateOneWithoutProductsInput.prototype, "update", void 0);
PriceUpdateOneWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateOneWithoutProductsInput", {
        isAbstract: true
    })
], PriceUpdateOneWithoutProductsInput);
exports.PriceUpdateOneWithoutProductsInput = PriceUpdateOneWithoutProductsInput;
