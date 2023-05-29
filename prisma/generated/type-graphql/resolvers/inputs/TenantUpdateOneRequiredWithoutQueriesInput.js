"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateOneRequiredWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutQueriesInput_1 = require("../inputs/TenantCreateOrConnectWithoutQueriesInput");
const TenantCreateWithoutQueriesInput_1 = require("../inputs/TenantCreateWithoutQueriesInput");
const TenantUpdateWithoutQueriesInput_1 = require("../inputs/TenantUpdateWithoutQueriesInput");
const TenantUpsertWithoutQueriesInput_1 = require("../inputs/TenantUpsertWithoutQueriesInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantUpdateOneRequiredWithoutQueriesInput = class TenantUpdateOneRequiredWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput)
], TenantUpdateOneRequiredWithoutQueriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutQueriesInput_1.TenantCreateOrConnectWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutQueriesInput_1.TenantCreateOrConnectWithoutQueriesInput)
], TenantUpdateOneRequiredWithoutQueriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpsertWithoutQueriesInput_1.TenantUpsertWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpsertWithoutQueriesInput_1.TenantUpsertWithoutQueriesInput)
], TenantUpdateOneRequiredWithoutQueriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantUpdateOneRequiredWithoutQueriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutQueriesInput_1.TenantUpdateWithoutQueriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutQueriesInput_1.TenantUpdateWithoutQueriesInput)
], TenantUpdateOneRequiredWithoutQueriesInput.prototype, "update", void 0);
TenantUpdateOneRequiredWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutQueriesInput", {
        isAbstract: true
    })
], TenantUpdateOneRequiredWithoutQueriesInput);
exports.TenantUpdateOneRequiredWithoutQueriesInput = TenantUpdateOneRequiredWithoutQueriesInput;
