"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyTenantInputEnvelope_1 = require("../inputs/QueryCreateManyTenantInputEnvelope");
const QueryCreateOrConnectWithoutTenantInput_1 = require("../inputs/QueryCreateOrConnectWithoutTenantInput");
const QueryCreateWithoutTenantInput_1 = require("../inputs/QueryCreateWithoutTenantInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryCreateNestedManyWithoutTenantInput = class QueryCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateWithoutTenantInput_1.QueryCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateOrConnectWithoutTenantInput_1.QueryCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateManyTenantInputEnvelope_1.QueryCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCreateManyTenantInputEnvelope_1.QueryCreateManyTenantInputEnvelope)
], QueryCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
QueryCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], QueryCreateNestedManyWithoutTenantInput);
exports.QueryCreateNestedManyWithoutTenantInput = QueryCreateNestedManyWithoutTenantInput;
