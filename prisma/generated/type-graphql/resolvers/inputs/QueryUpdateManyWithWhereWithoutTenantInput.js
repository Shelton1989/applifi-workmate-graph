"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryScalarWhereInput_1 = require("../inputs/QueryScalarWhereInput");
const QueryUpdateManyMutationInput_1 = require("../inputs/QueryUpdateManyMutationInput");
let QueryUpdateManyWithWhereWithoutTenantInput = class QueryUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryScalarWhereInput_1.QueryScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryScalarWhereInput_1.QueryScalarWhereInput)
], QueryUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateManyMutationInput_1.QueryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateManyMutationInput_1.QueryUpdateManyMutationInput)
], QueryUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
QueryUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], QueryUpdateManyWithWhereWithoutTenantInput);
exports.QueryUpdateManyWithWhereWithoutTenantInput = QueryUpdateManyWithWhereWithoutTenantInput;
