"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let SizeMaxAggregate = class SizeMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeMaxAggregate.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeMaxAggregate.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SizeMaxAggregate.prototype, "updatedAt", void 0);
SizeMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SizeMaxAggregate", {
        isAbstract: true
    })
], SizeMaxAggregate);
exports.SizeMaxAggregate = SizeMaxAggregate;
