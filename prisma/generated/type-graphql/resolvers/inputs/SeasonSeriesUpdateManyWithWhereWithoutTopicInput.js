"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateManyWithWhereWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesScalarWhereInput_1 = require("../inputs/SeasonSeriesScalarWhereInput");
const SeasonSeriesUpdateManyMutationInput_1 = require("../inputs/SeasonSeriesUpdateManyMutationInput");
let SeasonSeriesUpdateManyWithWhereWithoutTopicInput = class SeasonSeriesUpdateManyWithWhereWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesScalarWhereInput_1.SeasonSeriesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesScalarWhereInput_1.SeasonSeriesScalarWhereInput)
], SeasonSeriesUpdateManyWithWhereWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateManyMutationInput_1.SeasonSeriesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateManyMutationInput_1.SeasonSeriesUpdateManyMutationInput)
], SeasonSeriesUpdateManyWithWhereWithoutTopicInput.prototype, "data", void 0);
SeasonSeriesUpdateManyWithWhereWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateManyWithWhereWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateManyWithWhereWithoutTopicInput);
exports.SeasonSeriesUpdateManyWithWhereWithoutTopicInput = SeasonSeriesUpdateManyWithWhereWithoutTopicInput;
