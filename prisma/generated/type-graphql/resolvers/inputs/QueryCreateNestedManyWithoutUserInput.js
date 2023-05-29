"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateManyUserInputEnvelope_1 = require("../inputs/QueryCreateManyUserInputEnvelope");
const QueryCreateOrConnectWithoutUserInput_1 = require("../inputs/QueryCreateOrConnectWithoutUserInput");
const QueryCreateWithoutUserInput_1 = require("../inputs/QueryCreateWithoutUserInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryCreateNestedManyWithoutUserInput = class QueryCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateWithoutUserInput_1.QueryCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryCreateOrConnectWithoutUserInput_1.QueryCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateManyUserInputEnvelope_1.QueryCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryCreateManyUserInputEnvelope_1.QueryCreateManyUserInputEnvelope)
], QueryCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereUniqueInput_1.QueryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
QueryCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], QueryCreateNestedManyWithoutUserInput);
exports.QueryCreateNestedManyWithoutUserInput = QueryCreateNestedManyWithoutUserInput;
