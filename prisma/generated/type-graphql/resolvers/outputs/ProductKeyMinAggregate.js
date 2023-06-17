"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductKeyMinAggregate = class ProductKeyMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinAggregate.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMinAggregate.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyMinAggregate.prototype, "updatedAt", void 0);
ProductKeyMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductKeyMinAggregate", {
        isAbstract: true
    })
], ProductKeyMinAggregate);
exports.ProductKeyMinAggregate = ProductKeyMinAggregate;
