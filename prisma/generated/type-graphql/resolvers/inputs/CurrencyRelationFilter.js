"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyWhereInput_1 = require("../inputs/CurrencyWhereInput");
let CurrencyRelationFilter = class CurrencyRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereInput_1.CurrencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereInput_1.CurrencyWhereInput)
], CurrencyRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereInput_1.CurrencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereInput_1.CurrencyWhereInput)
], CurrencyRelationFilter.prototype, "isNot", void 0);
CurrencyRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyRelationFilter", {
        isAbstract: true
    })
], CurrencyRelationFilter);
exports.CurrencyRelationFilter = CurrencyRelationFilter;
