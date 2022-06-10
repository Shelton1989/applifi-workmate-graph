"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCountAggregate_1 = require("../outputs/ColorCountAggregate");
const ColorMaxAggregate_1 = require("../outputs/ColorMaxAggregate");
const ColorMinAggregate_1 = require("../outputs/ColorMinAggregate");
let ColorGroupBy = class ColorGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorGroupBy.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ColorGroupBy.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ColorGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ColorGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCountAggregate_1.ColorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCountAggregate_1.ColorCountAggregate)
], ColorGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorMinAggregate_1.ColorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorMinAggregate_1.ColorMinAggregate)
], ColorGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorMaxAggregate_1.ColorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorMaxAggregate_1.ColorMaxAggregate)
], ColorGroupBy.prototype, "_max", void 0);
ColorGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ColorGroupBy", {
        isAbstract: true
    })
], ColorGroupBy);
exports.ColorGroupBy = ColorGroupBy;
