"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CurrencyCreateManyInput = class CurrencyCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateManyInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateManyInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateManyInput.prototype, "updatedAt", void 0);
CurrencyCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateManyInput", {
        isAbstract: true
    })
], CurrencyCreateManyInput);
exports.CurrencyCreateManyInput = CurrencyCreateManyInput;
