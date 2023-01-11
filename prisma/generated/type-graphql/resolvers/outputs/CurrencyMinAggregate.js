"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CurrencyMinAggregate = class CurrencyMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyMinAggregate.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyMinAggregate.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyMinAggregate.prototype, "updatedAt", void 0);
CurrencyMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CurrencyMinAggregate", {
        isAbstract: true
    })
], CurrencyMinAggregate);
exports.CurrencyMinAggregate = CurrencyMinAggregate;
