"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateManyTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QueryCreateManyTenantInput = class QueryCreateManyTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateManyTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateManyTenantInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateManyTenantInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateManyTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateManyTenantInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateManyTenantInput.prototype, "userId", void 0);
QueryCreateManyTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateManyTenantInput", {
        isAbstract: true
    })
], QueryCreateManyTenantInput);
exports.QueryCreateManyTenantInput = QueryCreateManyTenantInput;
