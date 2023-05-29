"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCountAggregate_1 = require("../outputs/QueryCountAggregate");
const QueryMaxAggregate_1 = require("../outputs/QueryMaxAggregate");
const QueryMinAggregate_1 = require("../outputs/QueryMinAggregate");
let QueryGroupBy = class QueryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QueryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], QueryGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryGroupBy.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryGroupBy.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QueryGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], QueryGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCountAggregate_1.QueryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCountAggregate_1.QueryCountAggregate)
], QueryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMinAggregate_1.QueryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryMinAggregate_1.QueryMinAggregate)
], QueryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryMaxAggregate_1.QueryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryMaxAggregate_1.QueryMaxAggregate)
], QueryGroupBy.prototype, "_max", void 0);
QueryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QueryGroupBy", {
        isAbstract: true
    })
], QueryGroupBy);
exports.QueryGroupBy = QueryGroupBy;
