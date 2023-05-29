"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateWithoutTenantInput_1 = require("../inputs/QueryCreateWithoutTenantInput");
const QueryUpdateWithoutTenantInput_1 = require("../inputs/QueryUpdateWithoutTenantInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryUpsertWithWhereUniqueWithoutTenantInput = class QueryUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], QueryUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateWithoutTenantInput_1.QueryUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateWithoutTenantInput_1.QueryUpdateWithoutTenantInput)
], QueryUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateWithoutTenantInput_1.QueryCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryCreateWithoutTenantInput_1.QueryCreateWithoutTenantInput)
], QueryUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
QueryUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], QueryUpsertWithWhereUniqueWithoutTenantInput);
exports.QueryUpsertWithWhereUniqueWithoutTenantInput = QueryUpsertWithWhereUniqueWithoutTenantInput;
