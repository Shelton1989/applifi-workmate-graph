"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyUpdateOneWithoutPricesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateOrConnectWithoutPricesInput_1 = require("../inputs/CurrencyCreateOrConnectWithoutPricesInput");
const CurrencyCreateWithoutPricesInput_1 = require("../inputs/CurrencyCreateWithoutPricesInput");
const CurrencyUpdateWithoutPricesInput_1 = require("../inputs/CurrencyUpdateWithoutPricesInput");
const CurrencyUpsertWithoutPricesInput_1 = require("../inputs/CurrencyUpsertWithoutPricesInput");
const CurrencyWhereUniqueInput_1 = require("../inputs/CurrencyWhereUniqueInput");
let CurrencyUpdateOneWithoutPricesInput = class CurrencyUpdateOneWithoutPricesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput)
], CurrencyUpdateOneWithoutPricesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutPricesInput_1.CurrencyCreateOrConnectWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateOrConnectWithoutPricesInput_1.CurrencyCreateOrConnectWithoutPricesInput)
], CurrencyUpdateOneWithoutPricesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpsertWithoutPricesInput_1.CurrencyUpsertWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpsertWithoutPricesInput_1.CurrencyUpsertWithoutPricesInput)
], CurrencyUpdateOneWithoutPricesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CurrencyUpdateOneWithoutPricesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CurrencyUpdateOneWithoutPricesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], CurrencyUpdateOneWithoutPricesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateWithoutPricesInput_1.CurrencyUpdateWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateWithoutPricesInput_1.CurrencyUpdateWithoutPricesInput)
], CurrencyUpdateOneWithoutPricesInput.prototype, "update", void 0);
CurrencyUpdateOneWithoutPricesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyUpdateOneWithoutPricesInput", {
        isAbstract: true
    })
], CurrencyUpdateOneWithoutPricesInput);
exports.CurrencyUpdateOneWithoutPricesInput = CurrencyUpdateOneWithoutPricesInput;
