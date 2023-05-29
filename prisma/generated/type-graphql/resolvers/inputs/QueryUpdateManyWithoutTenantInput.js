"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyTenantInputEnvelope_1 = require("../inputs/QueryCreateManyTenantInputEnvelope");
const QueryCreateOrConnectWithoutTenantInput_1 = require("../inputs/QueryCreateOrConnectWithoutTenantInput");
const QueryCreateWithoutTenantInput_1 = require("../inputs/QueryCreateWithoutTenantInput");
const QueryScalarWhereInput_1 = require("../inputs/QueryScalarWhereInput");
const QueryUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/QueryUpdateManyWithWhereWithoutTenantInput");
const QueryUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/QueryUpdateWithWhereUniqueWithoutTenantInput");
const QueryUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/QueryUpsertWithWhereUniqueWithoutTenantInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryUpdateManyWithoutTenantInput = class QueryUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateWithoutTenantInput_1.QueryCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateOrConnectWithoutTenantInput_1.QueryCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryUpsertWithWhereUniqueWithoutTenantInput_1.QueryUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateManyTenantInputEnvelope_1.QueryCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCreateManyTenantInputEnvelope_1.QueryCreateManyTenantInputEnvelope)
], QueryUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryUpdateWithWhereUniqueWithoutTenantInput_1.QueryUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryUpdateManyWithWhereWithoutTenantInput_1.QueryUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryScalarWhereInput_1.QueryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
QueryUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], QueryUpdateManyWithoutTenantInput);
exports.QueryUpdateManyWithoutTenantInput = QueryUpdateManyWithoutTenantInput;
