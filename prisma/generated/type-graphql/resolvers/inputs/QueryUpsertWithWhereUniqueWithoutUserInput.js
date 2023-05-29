"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateWithoutUserInput_1 = require("../inputs/QueryCreateWithoutUserInput");
const QueryUpdateWithoutUserInput_1 = require("../inputs/QueryUpdateWithoutUserInput");
const QueryWhereUniqueInput_1 = require("../inputs/QueryWhereUniqueInput");
let QueryUpsertWithWhereUniqueWithoutUserInput = class QueryUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], QueryUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateWithoutUserInput_1.QueryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateWithoutUserInput_1.QueryUpdateWithoutUserInput)
], QueryUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateWithoutUserInput_1.QueryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryCreateWithoutUserInput_1.QueryCreateWithoutUserInput)
], QueryUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
QueryUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], QueryUpsertWithWhereUniqueWithoutUserInput);
exports.QueryUpsertWithWhereUniqueWithoutUserInput = QueryUpsertWithWhereUniqueWithoutUserInput;
