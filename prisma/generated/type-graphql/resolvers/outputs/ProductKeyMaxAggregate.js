"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductKeyMaxAggregate = class ProductKeyMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxAggregate.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyMaxAggregate.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductKeyMaxAggregate.prototype, "updatedAt", void 0);
ProductKeyMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductKeyMaxAggregate", {
        isAbstract: true
    })
], ProductKeyMaxAggregate);
exports.ProductKeyMaxAggregate = ProductKeyMaxAggregate;
