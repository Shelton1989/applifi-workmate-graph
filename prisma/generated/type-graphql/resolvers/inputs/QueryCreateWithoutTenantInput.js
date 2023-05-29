"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutQueriesInput_1 = require("../inputs/UserCreateNestedOneWithoutQueriesInput");
let QueryCreateWithoutTenantInput = class QueryCreateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateWithoutTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateWithoutTenantInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateWithoutTenantInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateWithoutTenantInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput)
], QueryCreateWithoutTenantInput.prototype, "User", void 0);
QueryCreateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateWithoutTenantInput", {
        isAbstract: true
    })
], QueryCreateWithoutTenantInput);
exports.QueryCreateWithoutTenantInput = QueryCreateWithoutTenantInput;
