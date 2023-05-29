"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutQueriesInput_1 = require("../inputs/TenantCreateNestedOneWithoutQueriesInput");
const UserCreateNestedOneWithoutQueriesInput_1 = require("../inputs/UserCreateNestedOneWithoutQueriesInput");
let QueryCreateInput = class QueryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutQueriesInput_1.TenantCreateNestedOneWithoutQueriesInput)
], QueryCreateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], QueryCreateInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], QueryCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutQueriesInput_1.UserCreateNestedOneWithoutQueriesInput)
], QueryCreateInput.prototype, "User", void 0);
QueryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateInput", {
        isAbstract: true
    })
], QueryCreateInput);
exports.QueryCreateInput = QueryCreateInput;
