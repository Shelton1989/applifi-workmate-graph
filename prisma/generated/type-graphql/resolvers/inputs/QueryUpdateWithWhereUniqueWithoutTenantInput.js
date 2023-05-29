"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryUpdateWithoutTenantInput_1 = require("../inputs/QueryUpdateWithoutTenantInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryUpdateWithWhereUniqueWithoutTenantInput = class QueryUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], QueryUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateWithoutTenantInput_1.QueryUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateWithoutTenantInput_1.QueryUpdateWithoutTenantInput)
], QueryUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
QueryUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], QueryUpdateWithWhereUniqueWithoutTenantInput);
exports.QueryUpdateWithWhereUniqueWithoutTenantInput = QueryUpdateWithWhereUniqueWithoutTenantInput;
