"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateWithoutTenantInput_1 = require("../inputs/QueryCreateWithoutTenantInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryCreateOrConnectWithoutTenantInput = class QueryCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], QueryCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateWithoutTenantInput_1.QueryCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryCreateWithoutTenantInput_1.QueryCreateWithoutTenantInput)
], QueryCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
QueryCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], QueryCreateOrConnectWithoutTenantInput);
exports.QueryCreateOrConnectWithoutTenantInput = QueryCreateOrConnectWithoutTenantInput;
