"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyUserInputEnvelope_1 = require("../inputs/QueryCreateManyUserInputEnvelope");
const QueryCreateOrConnectWithoutUserInput_1 = require("../inputs/QueryCreateOrConnectWithoutUserInput");
const QueryCreateWithoutUserInput_1 = require("../inputs/QueryCreateWithoutUserInput");
const QueryScalarWhereInput_1 = require("../inputs/QueryScalarWhereInput");
const QueryUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/QueryUpdateManyWithWhereWithoutUserInput");
const QueryUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/QueryUpdateWithWhereUniqueWithoutUserInput");
const QueryUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/QueryUpsertWithWhereUniqueWithoutUserInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryUpdateManyWithoutUserInput = class QueryUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateWithoutUserInput_1.QueryCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateOrConnectWithoutUserInput_1.QueryCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryUpsertWithWhereUniqueWithoutUserInput_1.QueryUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateManyUserInputEnvelope_1.QueryCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCreateManyUserInputEnvelope_1.QueryCreateManyUserInputEnvelope)
], QueryUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryUpdateWithWhereUniqueWithoutUserInput_1.QueryUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryUpdateManyWithWhereWithoutUserInput_1.QueryUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryScalarWhereInput_1.QueryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
QueryUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], QueryUpdateManyWithoutUserInput);
exports.QueryUpdateManyWithoutUserInput = QueryUpdateManyWithoutUserInput;
