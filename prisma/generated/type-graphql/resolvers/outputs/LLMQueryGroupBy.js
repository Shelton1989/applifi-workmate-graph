"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCountAggregate_1 = require("../outputs/LLMQueryCountAggregate");
const LLMQueryMaxAggregate_1 = require("../outputs/LLMQueryMaxAggregate");
const LLMQueryMinAggregate_1 = require("../outputs/LLMQueryMinAggregate");
let LLMQueryGroupBy = class LLMQueryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryGroupBy.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryGroupBy.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LLMQueryGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LLMQueryGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCountAggregate_1.LLMQueryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCountAggregate_1.LLMQueryCountAggregate)
], LLMQueryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryMinAggregate_1.LLMQueryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryMinAggregate_1.LLMQueryMinAggregate)
], LLMQueryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryMaxAggregate_1.LLMQueryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryMaxAggregate_1.LLMQueryMaxAggregate)
], LLMQueryGroupBy.prototype, "_max", void 0);
LLMQueryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LLMQueryGroupBy", {
        isAbstract: true
    })
], LLMQueryGroupBy);
exports.LLMQueryGroupBy = LLMQueryGroupBy;
